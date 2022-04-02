import { tw } from 'twind';

export default function App() {
  return (
    <div
      className={tw`flex flex(col grow) justify-center items-center w-screen h-screen bg-blue-400 text-white font-bold`}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
