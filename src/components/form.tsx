/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 29/08/2026 - 22:03:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import Button from "../ui/Button"
import { useState } from "react";
import {supabase} from "../lib/supabase"
import {toast} from "sonner";
function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name ==="" || email === ""){
      toast.error("Fill in your Name and Email!");
      return;
    }
    setLoading(true);
    
    const { error } = await supabase
    .from("contact_form")
    .insert({
    name: name,
    email: email,
    message: message,
    });


    if (error) {
      setLoading(false);
      toast.error("Failed to send. Please try again.");
    return;
    } else {
      toast.success("Your information was sent successfully");
    }
    setName("");
    setEmail("");
    setMessage("");
    setLoading(false);
    
  }

  return(
    <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-[rgb(100,255,218)] text-sm">Name</label>
              <input type="text" 
              value={name} onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-lg w-[300px] hover:border-2 hover:border-[#64ffda] focus:border-[#64ffda] focus:border-2  focus:outline-none text-sm text-black p-1" ></input>
            </div>
            {/* EMAIL */}
            <div className="flex flex-col mt-2">
              <label className="text-[rgb(100,255,218)] text-sm">Email</label>
              <input type="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg w-[300px] hover:border-2 hover:border-[#64ffda] focus:border-[#64ffda] focus:border-2  focus:outline-none text-sm text-black p-1"></input>
            </div>
            {/* MESSAGE */}
            <div className="flex flex-col mt-2">
              <label className="text-[hsl(166,100%,70%)] text-sm">Message</label>
              <textarea  value={message} onChange={(e) => setMessage(e.target.value)}
              className="bg-white 
              rounded-lg w-[300px] hover:border-2 hover:border-[#64ffda] focus:border-[#64ffda] focus:border-2  focus:outline-none text-sm text-black p-1"></textarea>
            </div>

            <Button className="p-1 mt-2 text-sm" disabled={loading}>
              {loading? (
                <div className="flex items-center justify-center py-1 px-4">
                  <div className="flex rounded-full border border-t-transparent border-black animate-spin p-2"></div>
                </div>
                
              ) : "Submit" }
            </Button>
          </form>
  );
}

export default Form;
