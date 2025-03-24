import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ManageProducts from './ManageProducts';

const AdminDashboard = () => {
  return (
    <Router>
      <div>
        {/* AppBar - Navigation Bar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Admin Dashboard</Typography>
            <Button color="inherit" component={Link} to="/products" style={{ marginLeft: 'auto' }}>
              Manage Products
            </Button>
            <Button color="inherit" component={Link} to="/orders" style={{ marginLeft: '10px' }}>
              Manage Orders
            </Button>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Container style={{ marginTop: '20px' }}>
          <Switch>
            <Route path="/products" component={ManageProducts} />
            {/* You can later implement the orders management page */}
            <Route path="/orders" render={() => <Typography variant="h4">Manage Orders (Coming Soon)</Typography>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default AdminDashboard;
