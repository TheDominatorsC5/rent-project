import React, { useState } from 'react';

const RememberMeCheckbox = () => {
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <input
        id="remember"
        type="checkbox"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="remember" className="text-sm text-gray-700">
        Remember me
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
