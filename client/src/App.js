import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home.component";
import Facility from "./components/clientView/facility.component";
import Activity from "./components/clientView/activity.component";
import Access from "./components/clientView/access.component";
import Contact from "./components/clientView/contact.component";
import Reservation from "./components/clientView/reservation.component";
import Settings from "./components/settings.component";
import CustomersList from "./components/customers-list.component";
import EditCustomers from "./components/edit-customers.component";
import CreateCustomers from "./components/create-customers.component";
import Schedule from "./components/schedule.component";


function App() {
  return (
    <Router>
        {/* Client View */}
        <Route path="/" exact component={Home} />
        <Route path="/facility" exact component={Facility} />
        <Route path="/activity" exact component={Activity} />
        <Route path="/access" exact component={Access} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/reservation" exact component={Reservation} />
        {/* Admin View */}
        <Route path="/admin" exact component={CustomersList} />
        <Route path="/admin/settings" exact component={Settings} />
        <Route path="/admin/edit/:id" exact component={EditCustomers} />
        <Route path="/admin/create" exact component={CreateCustomers} />
        <Route path="/admin/schedule" exact component={Schedule} />
    </Router>
  );
}

export default App;
