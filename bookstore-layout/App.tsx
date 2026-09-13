// TỔNG HỢP GIỜ 1 + 2 + 3 — Màn hình Trang chủ BookStore
// Thứ tự: Header (cố định trên cùng) -> ScrollView (Category Chips + Book Grid) -> Floating Cart Button (nổi ngoài ScrollView)
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { BOOKS } from "./data";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  // Bấm vào 1 cuốn sách -> demo thêm vào giỏ hàng (chỉ tăng số đếm, không đi sâu logic)
  const handlePressBook = (id: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Header cố định trên cùng — nằm NGOÀI ScrollView nên không bị cuộn theo */}
      <Header />

      {/* 2. ScrollView chứa Chips + Grid — paddingBottom đủ lớn để
             FloatingCartButton không che mất sách cuối cùng */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.chipsWrap}>
          <CategoryChips />
        </View>

        <BookGrid books={BOOKS} onPressBook={handlePressBook} />
      </ScrollView>

      {/* 3. Nút giỏ nổi — NGOÀI ScrollView, luôn hiển thị đè lên nội dung cuộn */}
      <FloatingCartButton count={cartCount} onPress={() => console.log("Mở giỏ hàng")} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16, paddingBottom: 100 },
  chipsWrap: { marginBottom: 16 },
});
