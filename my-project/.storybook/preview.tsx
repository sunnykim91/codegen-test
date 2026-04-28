import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/app/globals.css";
import "../src/app/tokens/figma-variables.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isPage = context.title?.startsWith("Pages/");
      if (!isPage) return <Story />;
      return (
        <div
          style={{
            width: 390,
            minHeight: "100vh",
            margin: "0 auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
