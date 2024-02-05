
import { Router, Route , A } from "@solidjs/router";
import Users from './pages/Users'
import Admin from './pages/Admin'
import Home from './pages/Home'
export default function App() {
  return (
        <Router>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} /> {/* 👈 Define the about page route */}
      <Route path="/users" component={Users} /> {/* 👈 Define the contact page route */}
      </Router>
  );
}

