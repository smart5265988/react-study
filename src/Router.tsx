import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
// 전체 경로 설정
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
      <Redirect to="/" />
    </BrowserRouter>
  );
}
export default Router;
