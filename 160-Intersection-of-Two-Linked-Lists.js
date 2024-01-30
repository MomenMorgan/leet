class Solution(object):
    def getIntersectionNode(self, headA, headB):
        if not headA or not headB:
            return None

        pointerA, pointerB = headA, headB

        while pointerA != pointerB:
           
            pointerA = pointerA.next if pointerA else headB
            pointerB = pointerB.next if pointerB else headA

        return pointerA