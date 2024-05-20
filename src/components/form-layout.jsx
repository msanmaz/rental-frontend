import React from 'react';

const FormLayout = ({ children, onSubmit }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to access your dashboard.
          </p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormLayout;
