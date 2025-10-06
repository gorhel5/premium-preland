export const setCountryFlag = (country: string) => {
  const flags: { [key: string]: string } = {
    Uzbekistan: "🇺🇿 Uzbekistan",
    Russia: "🇷🇺 Russia",
    Ukraine: "🇺🇦 Ukraine",
    Germany: "🇩🇪 Germany",
  };
  return flags[country] || country;
};
