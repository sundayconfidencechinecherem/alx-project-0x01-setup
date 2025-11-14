import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, username, email, address, phone, website, company  }) => {
  return (
  <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm  text-gray-500">@{username}</p>
      
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <p className="text-gray-600 text-sm">Company: {company.name}</p>
        <p>Email:  {email}</p>
        <p>Phone:  {phone}</p>
        <p> Website: {website}</p>
        <p>Motto: {company.catchPhrase}</p>
        <p>Address: {address.city}, {address.street}</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">Business: {company.bs}</p>
      </div>
    </div>

  );
};

export default UserCard;