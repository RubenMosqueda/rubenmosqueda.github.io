"use strict";

import { navBarBuilder } from "./elementsBuilder.mjs";
import { navbarFixedBehavior } from "./elementsBuilder.mjs";
import { footerBuilder } from "./elementsBuilder.mjs";


navBarBuilder();
window.addEventListener('resize', navbarFixedBehavior);
navbarFixedBehavior();
footerBuilder();



