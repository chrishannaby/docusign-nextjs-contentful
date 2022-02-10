const fs = require("fs");
const path = require("path");

module.exports = {
  async onPreBuild({ constants }) {
    if (!process.env.ADD_RBAC) {
      ("Not adding role based access control");
      return;
    }

    console.log("Adding role based access control");

    const redirects = `
    /blog/* 200! Role=admin
    /blog/* / 401!
    `.trimStart();
    const redirectsPath = path.resolve("./public", "_redirects");
    console.log(`Writing redirects to ${redirectsPath}`);
    fs.writeFileSync(redirectsPath, redirects);
  },
};
