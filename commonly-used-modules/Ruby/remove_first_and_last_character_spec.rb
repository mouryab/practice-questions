Test.describe("Basic tests") do
Test.assert_equals(remove_char('eloquent'), 'loquen')
Test.assert_equals(remove_char('country'), 'ountr')
Test.assert_equals(remove_char('person'), 'erso')
Test.assert_equals(remove_char('place'), 'lac')
Test.assert_equals(remove_char('ok'), '')
end

Test.describe("Random Tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(s) s.slice(1,s.length-2) end
l="abc"

40.times do
    s=[]
    randint(2,20).times do
      s+=[l[randint(0,l.length-1)]]
    end
    s=s.join
    Test.it("Testing for #{s}") do
    Test.assert_equals(remove_char(s.dup),sol(s),"It should work for random inputs too")
    end
end
end
