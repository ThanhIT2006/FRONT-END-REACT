import React, { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []);

  return (
    <div>
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}

export default Welcome;
