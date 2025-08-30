import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme.js'
import ThemeButton from './components/themeButton';
import Card from './components/Card.jsx';

function App() {
  const [themeMode,setThemeMode] = useState("light");

  // agar we make the function with same value those functionality will be automatically injected to our functions
  function lightTheme(){
    setThemeMode("light");
  }

  function darkTheme(){
    setThemeMode("dark");
  }

  // actual change in a theme.
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);
  return (
    <ThemeContextProvider value={{lightTheme,darkTheme,themeMode}}>
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                    </div>
                        <Card/>
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

    </ThemeContextProvider>
  )
}

export default App
