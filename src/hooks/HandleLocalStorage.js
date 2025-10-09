export const HandleLocalStorage = (data) => {
  const installedApp = JSON.parse(localStorage.getItem("installedApp"));

  let updatedInstalledApp = [];
  if (installedApp) {
    const isInstalled = installedApp.some((app) => app.id === data.id);
    if (isInstalled) {
      return;
    }
    updatedInstalledApp = [...installedApp, data];
  } else {
    updatedInstalledApp.push(data);
  }
  localStorage.setItem("installedApp", JSON.stringify(updatedInstalledApp));
};


export const UninstallApp = (data, setInstalledApps) => {
  const installedApp = JSON.parse(localStorage.getItem("installedApp"));
  const updatedInstalledApp = installedApp.filter((app) => app.id !== data.id);
  localStorage.setItem("installedApp", JSON.stringify(updatedInstalledApp));
  setInstalledApps(updatedInstalledApp);
};
