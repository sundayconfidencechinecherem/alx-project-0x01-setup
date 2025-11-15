import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces"; 
import { useState } from "react"; 
import UserModal from "@/components/common/UserModal"; 

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [user, setUser] = useState<UserData | null>(null); 

   const handleAddUser = (newUser: UserData) => {  
    setUser({ ...newUser, id: posts.length + 1 });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button  onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((user: UserProps) => (
            <UserCard 
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (  // ← ADDED MODAL RENDERING
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
     );
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;