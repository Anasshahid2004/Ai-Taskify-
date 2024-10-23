import React from "react";
import Layout from '../components/Layout';

const Unauthorized = () => {
  return (
    <Layout title="Unauthorized Access">
      <h1 className="text-2xl font-bold mb-6">Access Without Permission</h1>
      <p>This page is not authorised for you to access.</p>
    </Layout>
  );
};

export default Unauthorized;
