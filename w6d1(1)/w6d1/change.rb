def makeChange(money, currencyArr)
  change = []
  remainingMoney = money
  if ((remainingMoney/currencyArr.first) != 0)
    change << currencyArr.first
    remainingMoney = remainingMoney - currencyArr.first
    return change.concat( makeChange(remainingMoney, currencyArr))
  end
  return change.concat( makeChange(remainingMoney, currencyArr[0..-1])) unless currencyArr.size == 1
end

makeChange(27, [10,5,1])