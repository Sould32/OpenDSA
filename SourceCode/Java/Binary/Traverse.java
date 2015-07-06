static boolean SUCCESS = true;

// Visit nodes via inorder traversal
/* *** ODSATag: inorder *** */
static void inorder(BinNode rt) {
  if (rt == null) return;
  inorder(rt.left());
  visit(rt);
  inorder(rt.right());
}
/* *** ODSAendTag: inorder *** */

// Visit nodes via postorder traversal
/* *** ODSATag: postorder *** */
static void postorder(BinNode rt) {
  if (rt == null) return;
  postorder(rt.left());
  postorder(rt.right());
  visit(rt);
}
/* *** ODSAendTag: postorder *** */

static void visit(BinNode rt) {
  System.out.print(rt.element() + " ");
}

/* *** ODSATag: count *** */
static int count(BinNode rt) {
  if (rt == null) return 0;  // Nothing to count
  return 1 + count(rt.left()) + count(rt.right());
}
/* *** ODSAendTag: count *** */

public static void main(String args[]) throws IOException {
  BSTNode rt1 = null;
  BSTNode rt2 = new BSTNode(new KVPair(5, "John"));

  int temp = count(rt1);
  if(!checkBST(rt2, -1, 999999)) SUCCESS = false;
  rt2.setLeft(new BSTNode(new KVPair(10, "Jack")));
  if(checkBST(rt2, -1, 999999)) SUCCESS = false;

  rt1 = new BSTNode(5);
  rt1.setLeft(new BSTNode(3));
  rt1.setRight(new BSTNode(6));
  preorder(rt1);
  System.out.println();
  preorder2(rt1);
  System.out.println();
  inorder(rt1);
  System.out.println();
  postorder(rt1);
  System.out.println();

  if (SUCCESS) {
    PrintWriter output = new PrintWriter("success");
    output.println("Success");
    output.flush();
    output.close();
    System.out.println("Success!");
  } else {
    System.out.println("Testing failed");
  }
}

}
