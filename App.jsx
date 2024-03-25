import { AuthProvider } from "./context/AuthProvider";
import Root from "./Root"

export default function App(){
  return (
    <AuthProvider>
      <Root/>
    </AuthProvider>
  )
}
