/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */
const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;
export default class TextDirection {
  name() {
    return "textDirection";
  }

  schema() {
    return {
      attrs: {
        align: {
          default: "ltr",
        },
      },
      parseDOM: [
        {
          style: "direction",
          getAttrs: (value) => ({ direction: value }),
        },
      ],
      toDOM: (mark) => [
        "span",
        { style: `direction: ${mark.attrs.align};` },
        0,
      ],
    };
  }

  commands({ type, updateMark }) {
    return (attrs) => updateMark(type, attrs);
  }

  pasteRules({ type }) {
    return [];
  }

  inputRules({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
  }

  plugins() {
    return [];
  }
}
