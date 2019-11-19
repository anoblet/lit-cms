import { Firebase } from "@anoblet/firebase";
import config from "../etc/config";
import "firebase/firestore";

export default new Firebase(config.firebase);
