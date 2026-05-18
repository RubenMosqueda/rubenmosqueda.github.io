"use strict";

import { navBarBuilder } from "./elementsBuilder.mjs";
import { navbarFixedBehavior } from "./elementsBuilder.mjs";
import { backgroundBuilder } from "./elementsBuilder.mjs";
import { footerBuilder } from "./elementsBuilder.mjs";


navBarBuilder();
window.addEventListener('resize', navbarFixedBehavior);
navbarFixedBehavior();
backgroundBuilder();
footerBuilder();

//Nota Agregar rutina para mostrar icono de seccion activa en el navbar.



