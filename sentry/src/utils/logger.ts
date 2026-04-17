export const larkColors = {
  info: "#74d4ff",
  success: "#bbf45",
  warn: "#ffb869",
  error: "#ffa2a2",
  text: "#62748e",
  timestamp: "#dab2ff",
};

const getTitleStyle = (bgColor: string) =>
  `color: ${larkColors.text}; background: ${bgColor}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`;

const getSubtitleStyle = (color: string) =>
  `color: ${color}; font-weight: 600;`;

const larkStyles = {
  info: {
    title: getTitleStyle(larkColors.info),
    subtitle: getSubtitleStyle(larkColors.info),
  },
  success: {
    title: getTitleStyle(larkColors.success),
    subtitle: getSubtitleStyle(larkColors.success),
  },
  warn: {
    title: getTitleStyle(larkColors.warn),
    subtitle: getSubtitleStyle(larkColors.warn),
  },
  error: {
    title: getTitleStyle(larkColors.error),
    subtitle: getSubtitleStyle(larkColors.error),
  },
  timestamp: {
    label: `color: ${larkColors.timestamp};`,
    value: getSubtitleStyle(larkColors.success),
  },
};

export const larkLogger = {
  get isEnabled() {
    return true;
  },

  info(
    title: string,
    subtitle: string,
    data?: unknown,
    tableColumns?: string[],
  ) {
    if (!this.isEnabled) return;
    console.groupCollapsed(
      `%c ${title} %c ${subtitle} `,
      larkStyles.info.title,
      larkStyles.info.subtitle,
    );
    if (data !== undefined) {
      if (Array.isArray(data)) {
        if (tableColumns) {
          console.table(data, tableColumns);
        } else {
          console.table(data);
        }
      } else if (typeof data === "object" && data !== null) {
        console.group("Details");
        console.log(data);
        console.groupEnd();
      } else {
        console.log(data);
      }
    }
    console.groupEnd();
  },

  success(title: string, subtitle: string, data?: unknown, duration?: number) {
    if (!this.isEnabled) return;
    console.groupCollapsed(
      `%c ${title} %c ${subtitle} `,
      larkStyles.success.title,
      larkStyles.success.subtitle,
    );
    if (duration !== undefined) {
      console.log(
        "%cTime cost%c " + duration + "ms",
        larkStyles.timestamp.label,
        larkStyles.timestamp.value,
      );
    }
    if (data !== undefined) {
      if (Array.isArray(data)) {
        console.table(data);
      } else if (typeof data === "object" && data !== null) {
        console.group("Response Data");
        console.log(data);
        console.groupEnd();
      } else {
        console.log(data);
      }
    }
    console.groupEnd();
  },

  warn(title: string, subtitle: string, data?: unknown) {
    if (!this.isEnabled) return;
    console.groupCollapsed(
      `%c ${title} %c ${subtitle} `,
      larkStyles.warn.title,
      larkStyles.warn.subtitle,
    );
    if (data !== undefined) {
      if (Array.isArray(data)) {
        console.table(data);
      } else if (typeof data === "object" && data !== null) {
        console.group("Warning Details");
        console.log(data);
        console.groupEnd();
      } else {
        console.log(data);
      }
    }
    console.groupEnd();
  },

  error(title: string, subtitle: string, error?: unknown) {
    if (!this.isEnabled) return;
    console.groupCollapsed(
      `%c ${title} %c ${subtitle} `,
      larkStyles.error.title,
      larkStyles.error.subtitle,
    );
    if (error !== undefined) {
      console.group("Error Details");
      console.error(error);
      console.groupEnd();
    }
    console.groupEnd();
  },
};
