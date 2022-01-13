"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SlackStatus_instances, _SlackStatus_client, _SlackStatus_USER_ID, _SlackStatus_getPresence;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackStatus = void 0;
const web_api_1 = require("@slack/web-api");
class SlackStatus {
    constructor({ token, userID }) {
        _SlackStatus_instances.add(this);
        _SlackStatus_client.set(this, void 0);
        _SlackStatus_USER_ID.set(this, void 0);
        if (!token)
            throw new Error("Slack token is required");
        __classPrivateFieldSet(this, _SlackStatus_client, new web_api_1.WebClient(token), "f");
        if (!userID)
            throw new Error("Slack user id is required");
        __classPrivateFieldSet(this, _SlackStatus_USER_ID, userID, "f");
    }
    setStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield __classPrivateFieldGet(this, _SlackStatus_client, "f").users.setPresence({
                    presence: status,
                });
                if (!result.ok)
                    throw new Error(result.error);
            }
            catch (e) {
                if (e instanceof Error)
                    throw e;
            }
        });
    }
}
exports.SlackStatus = SlackStatus;
_SlackStatus_client = new WeakMap(), _SlackStatus_USER_ID = new WeakMap(), _SlackStatus_instances = new WeakSet(), _SlackStatus_getPresence = function _SlackStatus_getPresence() {
    return __awaiter(this, void 0, void 0, function* () {
        const current = yield __classPrivateFieldGet(this, _SlackStatus_client, "f").users.getPresence({
            user: __classPrivateFieldGet(this, _SlackStatus_USER_ID, "f"),
        });
        if (!current.ok || !current.error || !current.profile)
            throw new Error("Failed to get current user profile");
        return current;
    });
};
