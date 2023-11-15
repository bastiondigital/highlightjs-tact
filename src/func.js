/*
Language: FunC
Author: Gunnar Grimnes <gunnar@bakkenbaeck.no>
Contributors: Garth Bjerk <garth@bakkenbaeck.no>,
Description: A high-level language FunC is used to program smart contracts on TON.
Website: https://docs.ton.org/develop/func/overview
*/
export default function (hljs) {
  return {
    name: "FunC",
    keywords: {
      type: "int slice cell builder tuple cont",
      keyword:
        "null asm forall impure inline inline_ref method_id var if return throw_unless do until while ifnot",
      built_in: "main recv_internal recv_external run_ticktock",
    },
    contains: [
      hljs.C_NUMBER_MODE,
      {
        scope: "string",
        begin: '"',
        end: '"',
      },
      hljs.COMMENT(
        "{-", // begin
        "-}" // end
      ),
      hljs.COMMENT(";;", /[\n]/),
    ],
  };
}
