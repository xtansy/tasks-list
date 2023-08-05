import { withRouter } from "./withRouter";
import { withRedux } from "./withRedux";
import { compose } from "./compose";

export const withProvider = compose(withRouter, withRedux)