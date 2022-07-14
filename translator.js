async function translator(text, api) {
  let en = await api(text, { from: "fr", to: "en" });
  let de = await api(text, { from: "fr", to: "de" });
  let nl = await api(text, { from: "fr", to: "nl" });
  let sk = await api(text, { from: "fr", to: "sk" });

  return { en, de, nl, sk };
}

module.exports.translator = translator;
