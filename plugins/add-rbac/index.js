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
    /* Role=admin 200!
    /* https://www.docusign.com 401!
    `.trimStart();
    const redirectsPath = path.resolve(constants.PUBLISH_DIR, "_redirects");
    console.log(`Writing redirects to ${redirectsPath}`);
    fs.writeFileSync(redirectsPath, redirects);
  },
};
