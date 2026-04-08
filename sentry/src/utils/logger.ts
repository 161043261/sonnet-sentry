export const sonnetColors = {
  info: "#74d4ff",
  success: "#bbf45",
  warn: "#ffb869",
  error: "#ffa2a2",
  text: "#62748e",
  timestamp: "#dab2ff",
};

const getTitleStyle = (bgColor: string) =>
  `color: ${sonnetColors.text}; background: ${bgColor}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`;

const getSubtitleStyle = (color: string) =>
  `color: ${color}; font-weight: 600;`;

const sonnetStyles = {
  info: {
    title: getTitleStyle(sonnetColors.info),
    subtitle: getSubtitleStyle(sonnetColors.info),
  },
  success: {
    title: getTitleStyle(sonnetColors.success),
    subtitle: getSubtitleStyle(sonnetColors.success),
  },
  warn: {
    title: getTitleStyle(sonnetColors.warn),
    subtitle: getSubtitleStyle(sonnetColors.warn),
  },
  error: {
    title: getTitleStyle(sonnetColors.error),
    subtitle: getSubtitleStyle(sonnetColors.error),
  },
  timestamp: {
    label: `color: ${sonnetColors.timestamp};`,
    value: getSubtitleStyle(sonnetColors.success),
  },
};

export const sonnetLogger = {
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
      sonnetStyles.info.title,
      sonnetStyles.info.subtitle,
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
      sonnetStyles.success.title,
      sonnetStyles.success.subtitle,
    );
    if (duration !== undefined) {
      console.log(
        "%cTime cost%c " + duration + "ms",
        sonnetStyles.timestamp.label,
        sonnetStyles.timestamp.value,
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
      sonnetStyles.warn.title,
      sonnetStyles.warn.subtitle,
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
      sonnetStyles.error.title,
      sonnetStyles.error.subtitle,
    );
    if (error !== undefined) {
      console.group("Error Details");
      console.error(error);
      console.groupEnd();
    }
    console.groupEnd();
  },
};
