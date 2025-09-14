type Callback = () => void;

function delayedCallback(callback: Callback, delaytime: number): void {
  setTimeout(() => {
    callback();
  }, delaytime);
}

function DelayedCallback() {
  const handleCallback = () => {
    console.log("Đã gọi callback sau 2 giây!");
  };

  delayedCallback(handleCallback, 2000);

  return <div></div>;
}

export default DelayedCallback;