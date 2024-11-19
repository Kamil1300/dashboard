// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "../components/Button"

export default function Example() {
    return (
        <form>
            <div className="space-y-12 flex mt-40 justify-center">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Login</h2>
                    <p className="mt-1 text-sm/6 text-gray-400">Admin or Only registered user can login</p>

                    <div className="mt-10">
                        <div className="">
                            <label htmlFor="user-name" className="block text-sm/6 font-medium">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="user-name"
                                    name="user-name"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 text-text-color2 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="password" className="block text-sm/6 font-medium ">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 text-text-color2 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

            <div className="mt-6">
               <Button className="bg-red-600 hover:bg-red-700 mr-3" type="submit" name="Forgot"/>
               <Button type="submit" name="Login"/>
            </div>
                </div>
            </div>

        </form>
    )
}
