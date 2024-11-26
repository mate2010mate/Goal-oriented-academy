# 1. Int და Float ტიპის ცვლადების ჯამი
int_var = 5  # int ტიპის ცვლადი
float_var = 2.5  # float ტიპის ცვლადი

result = int_var + float_var  # ჯამი
print("Result:", result)  # პასუხის გამოტანა

# კომენტარი:
# შედეგი იქნება float ტიპის (7.5), რადგან Python-ში, 
# როდესაც int და float ტიპის ცვლადებს ვამატებთ, შედეგი ავტომატურად ხდება float ტიპის,
# რათა არ მოხდეს მონაცემთა სიზუსტის დაკარგვა.

# 2. Boolean ტიპის ცვლადების ჯამი
bool_var1 = True  # boolean ტიპის ცვლადი
bool_var2 = False  # boolean ტიპის ცვლადი

bool_result = int(bool_var1) + int(bool_var2)  # boolean-ებს int-ში ვაქცევთ და ვამატებთ
print("Boolean Result:", bool_result)  # პასუხის გამოტანა

# კომენტარი:
# შედეგი იქნება 1, რადგან Python-ში boolean ტიპი წარმოდგენილია როგორც 0 და 1:
# True = 1 და False = 0. შესაბამისად, True (1) + False (0) = 1.
