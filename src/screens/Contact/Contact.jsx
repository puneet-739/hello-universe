import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: {errors}} = useForm();

  const submitHandler = (data) => {
    console.log(data)
  }

  console.log(errors);
  return (
    <div className="flex items-center justify-center min-h-8 bg-gray-100 py-  ">
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4" 
      onSubmit={handleSubmit(submitHandler)}>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            {...register("name", {required: 'Name is required'})}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <p className="text-red-600">{errors.name?.message}</p>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            {...register("gender")}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dob")}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            {...register("message")}
            className="border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        > Submit</button>

      </form>
    </div>
  );
}

export default Contact;
