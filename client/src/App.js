import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Settings from "./components/settings.component";
import CustomersList from "./components/customers-list.component";
import EditCustomers from "./components/edit-customers.component";
import CreateCustomers from "./components/create-customers.component";
import Schedule from "./components/schedule.component";


function App() {
  return (
    <Router>
      <Navbar />
        <div className="container">
          <Route path="/admin" exact component={CustomersList} />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/edit/:id" exact component={EditCustomers} />
          <Route path="/admin/create" exact component={CreateCustomers} />
          <Route path="/admin/schedule" exact component={Schedule} />
        </div>
    </Router>
  );
}

export default App;
