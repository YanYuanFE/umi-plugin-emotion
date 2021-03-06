// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function (api: IApi) {
  api.logger.info('use plugin');

  // api.modifyHTML(($) => {
  //   $('body').prepend(`<h1>hello umi plugin</h1>`);
  //   return $;
  // });

  api.modifyBabelOpts((babelOpts) => {
    const options = {
      "autoLabel": "dev-only",
      "labelFormat": "[local]"
    };
    babelOpts.presets.push([require.resolve('@emotion/babel-preset-css-prop'), options]);
    return babelOpts;
  });

}
