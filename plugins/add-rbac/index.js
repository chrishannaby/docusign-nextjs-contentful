module.exports = {
  async onPreBuild({ netlifyConfig }) {
    if (!process.env.ADD_RBAC) {
      ("Not adding role based access control");
      return;
    }

    console.log("Adding role based access control");
    netlifyConfig.redirects.push({
      from: "/*",
      status: 200,
      force: true,
      role: ["admin"],
    });

    netlifyConfig.redirects.push({
      from: "/*",
      status: 401,
      force: true,
      to: "https://www.docusign.com",
    });
  },
};
