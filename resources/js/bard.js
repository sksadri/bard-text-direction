/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */

import TextDirection from "./TextDirection";
import TextDirectionButton from "./TextDirectionButton";

Statamic.$bard.extend(({ mark }) => mark(new TextDirection()));
Statamic.$bard.buttons((buttons) => {
  const indexOfBold = _.findIndex(buttons, { command: "italic" });
  buttons.splice(indexOfBold + 1, 0, {
    name: "LTR",
    text: "Left Text Direction",
    command: "textDirection",
    args: { direction: "rtl" },
    icon: "paragraph fa-flip",
    component: TextDirectionButton,
  });
  buttons.splice(indexOfBold + 2, 0, {
    name: "RTL",
    text: "Right Text Direction",
    command: "textDirection",
    args: { direction: "rtl" },
    icon: "paragraph",
    component: TextDirectionButton,
  });
});
