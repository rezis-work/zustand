import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

const User = () => {
  const { setAddress, address, fullname, userName, fetchUser } = useStore(
    useShallow((state) => ({
      setAddress: state.setAddress,
      address: state.address,
      fullname: state.fullname,
      userName: state.userName,
      fetchUser: state.fetchUser,
    }))
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }
    fetchData();
  }, [fetchUser]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <UserIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-2 w-96 overflow-y-scroll">
        <div className="flex items-center gap-2">
          <p>{fullname}</p>
          <p className="text-sm">{userName}</p>
        </div>
        <Label>Your Address:</Label>
        <Input
          id="address"
          value={address}
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default User;
