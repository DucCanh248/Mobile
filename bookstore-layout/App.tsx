// TỔNG HỢP GIỜ 4 + GIỜ 5 — Home, Book Detail, Cart, Tab Bar
// Chưa dùng thư viện navigation thật: chuyển "màn hình" bằng useState,
// đúng yêu cầu "toàn bộ bài tập chỉ tập trung vào layout tĩnh (UI)".
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TabBar, TabKey } from "./components/TabBar";
import { HomeScreen } from "./screnns/HomeScreen";
import { BookDetailScreen } from "./screnns/BookDetailScreen";
import { CartScreen } from "./screnns/CartScreen";
import { BOOKS, CartItem, CART_ITEMS } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedBook = BOOKS.find((b) => b.id === selectedBookId);

  // Thêm 1 cuốn sách vào giỏ: nếu đã có thì +1 số lượng, chưa có thì thêm dòng mới
  const handleAddToCart = (bookId: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === bookId);
      if (existing) {
        return prev.map((item) =>
          item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const book = BOOKS.find((b) => b.id === bookId);
      if (!book) return prev;
      return [...prev, { book, quantity: 1 }];
    });
  };

  // Đang xem chi tiết 1 cuốn sách -> hiển thị BookDetailScreen thay vì Home,
  // ẩn TabBar để không lẫn với thanh "Thêm vào giỏ" cố định riêng của màn này.
  if (selectedBook) {
    return (
      <SafeAreaView style={styles.root}>
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() => {
            handleAddToCart(selectedBook.id);
            setSelectedBookId(null);
            setActiveTab("cart");
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* flex:1 -> containing block cho FloatingCartButton (Home) và TabBar bên dưới */}
      <View style={styles.body}>
        {activeTab === "home" && (
          <HomeScreen
            cartCount={cartCount}
            onPressBook={(id) => setSelectedBookId(id)}
            onPressCart={() => setActiveTab("cart")}
          />
        )}

        {activeTab === "cart" && <CartScreen items={cartItems} />}

        {activeTab === "category" && <Placeholder text="Nội dung tab 'Danh mục' — xem Giờ 2 (Category Chips)." />}
        {activeTab === "account" && <Placeholder text="Tài khoản (chưa yêu cầu trong đề bài)." />}

        <TabBar active={activeTab} onChange={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF" },
  body: { flex: 1 },
  placeholder: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  placeholderText: { textAlign: "center", color: "#5B6B7F" },
});
