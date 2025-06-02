/**
 * Copyright 2025 GoodRx, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">
        <Link href="/">Tasks App</Link>
      </h1>
      <div className="flex space-x-4">
        <Button asChild variant="ghost">
          <Link href="/tasks" className="uppercase">
            Tasks
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/variables" className="uppercase">
            Variables
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
