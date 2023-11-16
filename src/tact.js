/*
Language: Tact
Author: Gunnar Grimnes <gunnar@bakkenbaeck.no>
Contributors: Garth Bjerk <garth@bakkenbaeck.no>,
Description: A high-level language Tact is used to program smart contracts on TON.
Website: https://tact-lang.org/
*/
module.exports = function (hljs) {
  return {
    name: "Tact",
    keywords: {
      type: "Int Bool Slice Cell Builder String StringBuilder Map Address",
      keyword:
        "struct message contract " +
        "if else while do until repeat return extends mutates virtual override inline native let const fun self is initOf map bounced get as " +
        "get native extends mutates virtual override inline abstract",
      built_in: "send",
      literal:
        "true false uint8 uint16 uint32 uint64 uint128 uint256 int8 int16 int32 int64 int128 int256 coins",
    },
    contains: [
      {
        className: "symbol",
        begin: /\+|-|:|&&|==|{|}|;|=|,|!|!!|\/|\*|%|!=|<|>|<=|>=|\|\|/,
      },
      hljs.C_NUMBER_MODE,
      {
        scope: "string",
        begin: '"',
        end: '"',
      },
      hljs.COMMENT(
        "/\\*", // begin
        "\\*/" // end
      ),
      hljs.COMMENT("//", "$"),
    ],
  };
};
