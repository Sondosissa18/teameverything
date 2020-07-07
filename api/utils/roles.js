import AccessControl from "accesscontrol";

const ac = new AccessControl();

export const getRoles = () => {
  ac.grant("basic").readOwn("profile").updateOwn("profile");

  ac.grant("admin").extend("basic").readAny("profile");

  ac.grant("super-admin").extend("basic").extend("admin").updateAny("profile").deleteAny("profile");

  return ac;
};

export const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    try {
      const roles = getRoles();
      const permission = roles.can(req.loggedInUser.role)[action](resource);
      if (!permission.granted) {
        return res.status(403).json({
          error: "You don't have enough permissions to perform this action!",
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export const allowIfLoggedIn = async (req, res, next) => {
  try {
    if (!req.loggedInUser) {
      return res.status(401).json({
        error: "Please log in to access this route",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};
