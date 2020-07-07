import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean, object, array } from "@storybook/addon-knobs";
import { withPreview } from "storybook-addon-preview";
import "../../template/group/group.css";
import { previewCollection } from "../../template/utils";
import { GROUP_REACT_TEMPLATE } from "../../template/group/frameworks/React";
import {
    GROUP_REACT_MARKUP_TEMPLATE, GROUP_HTML_TEMPLATE, GROUP_CSS_TEMPLATE,
    GROUP_ANGULAR_MARKUP_TEMPLATE, GROUP_SVELTE_MARKUP_TEMPLATE
} from "../../template/group/template";
import { GROUP_VANILLA_TEMPLATE } from "../../template/group/frameworks/Vanilla";
import { GROUP_ANGULAR_HTML_TEMPLATE, GROUP_ANGULAR_COMPONENT_TEMPLATE } from "../../template/group/frameworks/Angular";
import { GROUP_SVELTE_TEMPLATE, GROUP_SVELTE_JSX_TEMPLATE } from "../../template/group/frameworks/Svelte";
import RotatableApp, { GROUP_ROTATABLE_TEMPLATE_OPTIONS, GROUP_ROTATABLE_FRAME } from "../../template/group/ables/Rotatable.template";
import { ROTATABLE_FRAME, ROTATABLE_PROPS_TEMPLATE } from "../../template/basic/ables/Rotatable.template";

const story = storiesOf("Group", module);

story.addDecorator(withKnobs).addDecorator(withPreview);

story.add("Rotatable", () => {
    return <RotatableApp
        {...ROTATABLE_PROPS_TEMPLATE()}
    />;
}, {
    preview: previewCollection(
        GROUP_HTML_TEMPLATE,
        GROUP_CSS_TEMPLATE,
        GROUP_VANILLA_TEMPLATE(GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_REACT_TEMPLATE(GROUP_REACT_MARKUP_TEMPLATE, GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_ANGULAR_HTML_TEMPLATE(GROUP_ANGULAR_MARKUP_TEMPLATE, GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_ANGULAR_COMPONENT_TEMPLATE(GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_SVELTE_TEMPLATE(GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_SVELTE_JSX_TEMPLATE(GROUP_SVELTE_MARKUP_TEMPLATE, GROUP_ROTATABLE_TEMPLATE_OPTIONS),
        GROUP_ROTATABLE_FRAME,
    ),
});
