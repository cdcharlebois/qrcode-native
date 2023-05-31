import { createElement } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export function QRCodeNative({ text, style }) {
    return text.status === "available" ? (
        <View>
            <QRCode value={text.value} />
        </View>
    ) : null;
}
