import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("AlwaysTyping");
export const SettingValues = await settings.init("dev.tharki.AlwaysTyping", defaultSettings);
import Settings from "./Components/Settings";
import Injections from "./injections/index";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
export { Settings } from "./Components/Settings.jsx";
