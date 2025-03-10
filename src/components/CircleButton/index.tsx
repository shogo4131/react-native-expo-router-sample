import type { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  type ViewStyle,
  TouchableOpacity,
} from "react-native";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
};

export const CircleButton = ({ children, style, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.addButton, style]}>
      <Text style={styles.addButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  addButtonText: {
    fontSize: 24,
    lineHeight: 32,
    color: "white",
  },
});
