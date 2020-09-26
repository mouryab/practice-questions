
def too_i(number)
  return 0 if (lead = number[/^\d+/]).nil?
  lead.bytes.reduce(0) do |acc, chaar|
    # 48 is the byte code for character '0'.
    acc*10 + chaar - 48 
  end
end